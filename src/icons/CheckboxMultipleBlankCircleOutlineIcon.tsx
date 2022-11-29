import React, { FC, memo } from 'react';
import CheckboxMultipleBlankCircleOutlineSvg from '../svg/checkbox-multiple-blank-circle-outline.svg';

export interface ICheckboxMultipleBlankCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMultipleBlankCircleOutlineIcon: FC<ICheckboxMultipleBlankCircleOutlineIconProps> = memo(props => {
  return <CheckboxMultipleBlankCircleOutlineSvg {...props} />;
});
