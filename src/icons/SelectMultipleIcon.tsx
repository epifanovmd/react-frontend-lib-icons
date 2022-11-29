import React, { FC, memo } from 'react';
import SelectMultipleSvg from '../svg/select-multiple.svg';

export interface ISelectMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectMultipleIcon: FC<ISelectMultipleIconProps> = memo(props => {
  return <SelectMultipleSvg {...props} />;
});
