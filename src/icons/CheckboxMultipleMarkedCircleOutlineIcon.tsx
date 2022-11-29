import React, { FC, memo } from 'react';
import CheckboxMultipleMarkedCircleOutlineSvg from '../svg/checkbox-multiple-marked-circle-outline.svg';

export interface ICheckboxMultipleMarkedCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMultipleMarkedCircleOutlineIcon: FC<ICheckboxMultipleMarkedCircleOutlineIconProps> = memo(props => {
  return <CheckboxMultipleMarkedCircleOutlineSvg {...props} />;
});
