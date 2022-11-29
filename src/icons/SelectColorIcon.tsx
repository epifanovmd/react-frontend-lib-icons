import React, { FC, memo } from 'react';
import SelectColorSvg from '../svg/select-color.svg';

export interface ISelectColorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectColorIcon: FC<ISelectColorIconProps> = memo(props => {
  return <SelectColorSvg {...props} />;
});
