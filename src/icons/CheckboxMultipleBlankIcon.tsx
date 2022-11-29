import React, { FC, memo } from 'react';
import CheckboxMultipleBlankSvg from '../svg/checkbox-multiple-blank.svg';

export interface ICheckboxMultipleBlankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMultipleBlankIcon: FC<ICheckboxMultipleBlankIconProps> = memo(props => {
  return <CheckboxMultipleBlankSvg {...props} />;
});
