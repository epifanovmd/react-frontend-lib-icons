import React, { FC, memo } from 'react';
import CheckboxMultipleBlankCircleSvg from '../svg/checkbox-multiple-blank-circle.svg';

export interface ICheckboxMultipleBlankCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMultipleBlankCircleIcon: FC<ICheckboxMultipleBlankCircleIconProps> = memo(props => {
  return <CheckboxMultipleBlankCircleSvg {...props} />;
});
