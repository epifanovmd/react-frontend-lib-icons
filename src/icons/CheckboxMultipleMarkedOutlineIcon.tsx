import React, { FC, memo } from 'react';
import CheckboxMultipleMarkedOutlineSvg from '../svg/checkbox-multiple-marked-outline.svg';

export interface ICheckboxMultipleMarkedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMultipleMarkedOutlineIcon: FC<ICheckboxMultipleMarkedOutlineIconProps> = memo(props => {
  return <CheckboxMultipleMarkedOutlineSvg {...props} />;
});
