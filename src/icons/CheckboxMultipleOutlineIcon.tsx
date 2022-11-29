import React, { FC, memo } from 'react';
import CheckboxMultipleOutlineSvg from '../svg/checkbox-multiple-outline.svg';

export interface ICheckboxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMultipleOutlineIcon: FC<ICheckboxMultipleOutlineIconProps> = memo(props => {
  return <CheckboxMultipleOutlineSvg {...props} />;
});
