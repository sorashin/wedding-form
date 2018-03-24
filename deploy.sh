#!/bin/bash
webpack --config webpack.config.js

gcloud app deploy --project wedding-form-prod
