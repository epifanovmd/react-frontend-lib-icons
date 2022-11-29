import React, { FC, memo } from 'react';
import SelectDragSvg from '../svg/select-drag.svg';

export interface ISelectDragIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectDragIcon: FC<ISelectDragIconProps> = memo(props => {
  return <SelectDragSvg {...props} />;
});
