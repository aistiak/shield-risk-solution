
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AdminLayout } from '@layout';


const initialValues = {
  isoType: '',
  buildingType: '',
  constructionQuality: '',
  roofType: '',
  soilSlope: '',
};

const stateOptions: { label: string; value: string }[] = [
  { label: 'Alabama $113.42', value: '113.42' },
  { label: 'Alaska $163.30', value: '163.30' },
  { label: 'Arizona $123.05', value: '123.05' },
  { label: 'Arkansas $115.03', value: '115.03' },
  { label: 'California $165.66', value: '165.66' },
  { label: 'Colorado $135.60', value: '135.60' },
  { label: 'Connecticut $172.17', value: '172.17' },
  { label: 'Delaware $126.03', value: '126.03' },
  { label: 'Florida $129.90', value: '129.90' },
  { label: 'Georgia $116.66', value: '116.66' },
  { label: 'Hawaii $203.83', value: '203.83' },
  { label: 'Idaho $116.08', value: '116.08' },
  { label: 'Illinois $132.91', value: '132.91' },
  { label: 'Indiana $114.50', value: '114.50' },
  { label: 'Iowa $115.07', value: '115.07' },
  { label: 'Kansas $113.57', value: '113.57' },
  { label: 'Kentucky $119.42', value: '119.42' },
  { label: 'Louisiana $118.49', value: '118.49' },
  { label: 'Maine $143.31', value: '143.31' },
  { label: 'Maryland $157.12', value: '157.12' },
  { label: 'Massachusetts $152.94', value: '152.94' },
  { label: 'Michigan $113.63', value: '113.63' },
  { label: 'Minnesota $123.87', value: '123.87' },
  { label: 'Mississippi $113.54', value: '113.54' },
  { label: 'Missouri $113.46', value: '113.46' },
  { label: 'Montana $122.96', value: '122.96' },
  { label: 'Nebraska $110.53', value: '110.53' },
  { label: 'Nevada $123.58', value: '123.58' },
  { label: 'New Hampshire $143.34', value: '143.34' },
  { label: 'New Mexico $123.66', value: '123.66' },
  { label: 'New York $165.01', value: '165.01' },
  { label: 'North Carolina $117.79', value: '117.79' },
  { label: 'North Dakota $118.05', value: '118.05' },
  { label: 'Ohio $115.31', value: '115.31' },
  { label: 'Oklahoma $110.87', value: '110.87' },
  { label: 'Oregon $135.93', value: '135.93' },
  { label: 'Pennsylvania $127.15', value: '127.15' },
  { label: 'Rhode Island $151.67', value: '151.67' },
  { label: 'South Carolina $120.89', value: '120.89' },
  { label: 'South Dakota $115.76', value: '115.76' },
  { label: 'Tennessee $110.07', value: '110.07' },
  { label: 'Texas $112.98', value: '112.98' },
  { label: 'Utah $119.57', value: '119.57' },
  { label: 'Vermont $148.23', value: '148.23' },
  { label: 'Virginia $137.22', value: '137.22' },
  { label: 'Washington $127.14', value: '127.14' },
  { label: 'West Virginia $115.01', value: '115.01' },
  { label: 'Wisconsin $118.87', value: '118.87' },
  { label: 'Wyoming $121.48', value: '121.48' },
  { label: 'District of Columbia $172.34', value: '172.34' },
];

const validationSchema = Yup.object().shape({
  isoType: Yup.string().required('Required'),
  buildingType: Yup.string().required('Required'),
  constructionQuality: Yup.string().required('Required'),
  roofType: Yup.string().required('Required'),
  soilSlope: Yup.string().required('Required'),
});

const isoOptions: any = {
  ISO1: 0,
  ISO2: 0,
  ISO3: -24.85,
  ISO4: 45.43,
  ISO5: 55.15,
  ISO6: 65.37,
};

const buildingTypeOptions: any = {
  'Family Dwelling': 0,
  Apartment: 20,
  Office: 60,
  'Mercantile/Retail': 60,
  Restaurant: 75,
  'Professional & Public Services': 125,
  Church: 50,
  'Service Station': 40,
  Industrial: 20,
  Vacant: -1,
  Warehouse: 8,
};

const constructionQualityOptions: any = {
  'Cost Effective': -15,
  Standard: 0,
  'Standard/Superior': 20,
  Superior: 40,
  'High-End': 85,
  'High-End plus(+)': 115,
  'High-End Deluxe': 140,
};

const roofTypeOptions: any = {
  'Asphalt Shingle': 0,
  'Tile Shingle': 20.41,
  'Wood Shake': 5.06,
  'Slate Shingle': 19.89,
  Metal: -1.13,
  'Built-Up': 2.45,
  Unknown: 0,
};

const soilSlopeOptions: any = {
  Unknown: 2.36,
  Yes: 10.17,
  No: 0,
};

const calculatePremium = (values: any) => {
  const total =
    isoOptions[values.isoType] +
    buildingTypeOptions[values.buildingType] +
    constructionQualityOptions[values.constructionQuality] +
    roofTypeOptions[values.roofType] +
    soilSlopeOptions[values.soilSlope];
  return total.toFixed(2);
};

const buildOutFactor = (values: any) => {
  const totalFactor =
    values.interiorWallsFraming + values.exteriorWallsFraming + values.mechanicalSystems;
  return ((totalFactor - 300) * 0.15).toFixed(2);
};

const calculateCostModifier = (values: any) => {
  const factorsSum =
    values.yearBuilt +
    (buildingTypeOptions[values.buildingType] || 0) +
    (constructionQualityOptions[values.constructionQuality] || 0) +
    (roofTypeOptions[values.roofType] || 0) +
    (soilSlopeOptions[values.soilSlope] || 0) +
    parseFloat(buildOutFactor(values));

  return factorsSum.toFixed(2);
};
const PremiumCalculator = () => {
  return (
    <AdminLayout>
      <div className="container mt-5">
        <h2>Premium Calculator</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const factor = buildOutFactor(values);
            const costModifier = calculateCostModifier(values);
            console.log('Build-Out factor:', factor);
            console.log('Cost Modifier:', costModifier);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">

                <label htmlFor="isoType" className="form-label">
                  State average cost per sqft
                </label>
                <Field
                  as="select"
                  id="stateRate"
                  name="stateRate"
                  className="form-select"
                >
                  <option value="" label="Select an option" />
                  {stateOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="mb-3">
                <label htmlFor="isoType" className="form-label">
                  ISO Type
                </label>
                <Field
                  as="select"
                  id="isoType"
                  name="isoType"
                  className="form-select"
                >
                  <option value="" label="Select an option" />
                  {Object.keys(isoOptions).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="mb-3">
                <label htmlFor="buildingType" className="form-label">
                  Building Type
                </label>
                <Field
                  as="select"
                  id="buildingType"
                  name="buildingType"
                  className="form-select"
                >
                  <option value="" label="Select an option" />
                  {Object.keys(buildingTypeOptions).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="mb-3">
                <label htmlFor="constructionQuality" className="form-label">
                  Construction Quality
                </label>
                <Field
                  as="select"
                  id="constructionQuality"
                  name="constructionQuality"
                  className="form-select"
                >
                  <option value="" label="Select an option" />
                  {Object.keys(constructionQualityOptions).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="mb-3">
                <label htmlFor="roofType" className="form-label">
                  Roof Type
                </label>
                <Field
                  as="select"
                  id="roofType"
                  name="roofType"
                  className="form-select"
                >
                  <option value="" label="Select an option" />
                  {Object.keys(roofTypeOptions).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="mb-3">
                <label htmlFor="soilSlope" className="form-label">
                  Soil Slope
                </label>
                <Field
                  as="select"
                  id="soilSlope"
                  name="soilSlope"
                  className="form-select"
                >
                  <option value="" label="Select an option" />
                  {Object.keys(soilSlopeOptions).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              </div>
              <h4>Build-Out factor</h4>
              <div className="mb-3">
                <label htmlFor="interiorWallsFraming" className="form-label">
                  Interior Walls & Framing (Up to 100%)
                </label>
                <Field
                  type="number"
                  id="interiorWallsFraming"
                  name="interiorWallsFraming"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exteriorWallsFraming" className="form-label">
                  Exterior Walls & Framing (Up to 100%)
                </label>
                <Field
                  type="number"
                  id="exteriorWallsFraming"
                  name="exteriorWallsFraming"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mechanicalSystems" className="form-label">
                  Mechanical Systems (Up to 100%)
                </label>
                <Field
                  type="number"
                  id="mechanicalSystems"
                  name="mechanicalSystems"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="totalArea" className="form-label">
                 Total Area
                </label>
                <Field
                  type="number"
                  id="totalArea"
                  name="totalArea"
                  className="form-control"
                />
              </div>



              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Calculate Premium
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </AdminLayout>
  );
};

export default PremiumCalculator;
