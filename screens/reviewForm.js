import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";
import globalStyles from "../styles/global";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating my must be a number 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = (props) => {
  const { addReview } = props;
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          addReview(values);
        }}
        validationSchema={reviewSchema}
      >
        {(formikProps) => {
          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                onChangeText={formikProps.handleChange("title")}
                value={formikProps.values.title}
                onBlur={formikProps.handleBlur("title")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.title && formikProps.errors.title}
              </Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Review body"
                onChangeText={formikProps.handleChange("body")}
                value={formikProps.values.body}
                onBlur={formikProps.handleBlur("body")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.body && formikProps.errors.body}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                onChangeText={formikProps.handleChange("rating")}
                value={formikProps.values.rating}
                keyboardType="numeric"
                onBlur={formikProps.handleBlur("rating")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.rating && formikProps.errors.rating}
              </Text>
              <FlatButton text="submit" onPress={formikProps.submitForm} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default ReviewForm;
