import React, { FC, memo } from 'react';
import SelectPlaceSvg from '../svg/select-place.svg';

export interface ISelectPlaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectPlaceIcon: FC<ISelectPlaceIconProps> = memo(props => {
  return <SelectPlaceSvg {...props} />;
});
