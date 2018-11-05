import React from 'react';
import styled from "styled-components"

// <Component /> renders a div to the DOM
const ComponentDemo = styled.div`
  color: red;
`;
const RenderedComponentDemo = () => <ComponentDemo>Hello Demos!</ComponentDemo>;

export default RenderedComponentDemo;