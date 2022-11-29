import React, { FC, memo } from 'react';
import CheckboxMultipleMarkedCircleSvg from '../svg/checkbox-multiple-marked-circle.svg';

export interface ICheckboxMultipleMarkedCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMultipleMarkedCircleIcon: FC<ICheckboxMultipleMarkedCircleIconProps> = memo(props => {
  return <CheckboxMultipleMarkedCircleSvg {...props} />;
});
