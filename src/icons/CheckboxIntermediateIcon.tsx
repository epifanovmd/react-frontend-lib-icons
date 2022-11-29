import React, { FC, memo } from 'react';
import CheckboxIntermediateSvg from '../svg/checkbox-intermediate.svg';

export interface ICheckboxIntermediateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxIntermediateIcon: FC<ICheckboxIntermediateIconProps> = memo(props => {
  return <CheckboxIntermediateSvg {...props} />;
});
