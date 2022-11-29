import React, { FC, memo } from 'react';
import CheckboxMultipleMarkedSvg from '../svg/checkbox-multiple-marked.svg';

export interface ICheckboxMultipleMarkedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMultipleMarkedIcon: FC<ICheckboxMultipleMarkedIconProps> = memo(props => {
  return <CheckboxMultipleMarkedSvg {...props} />;
});
