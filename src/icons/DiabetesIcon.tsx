import React, { FC, memo } from 'react';
import DiabetesSvg from '../svg/diabetes.svg';

export interface IDiabetesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiabetesIcon: FC<IDiabetesIconProps> = memo(props => {
  return <DiabetesSvg {...props} />;
});
