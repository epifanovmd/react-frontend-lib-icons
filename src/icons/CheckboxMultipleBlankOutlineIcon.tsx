import React, { FC, memo } from 'react';
import CheckboxMultipleBlankOutlineSvg from '../svg/checkbox-multiple-blank-outline.svg';

export interface ICheckboxMultipleBlankOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMultipleBlankOutlineIcon: FC<ICheckboxMultipleBlankOutlineIconProps> = memo(props => {
  return <CheckboxMultipleBlankOutlineSvg {...props} />;
});
