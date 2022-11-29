import React, { FC, memo } from 'react';
import EarthBoxRemoveSvg from '../svg/earth-box-remove.svg';

export interface IEarthBoxRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarthBoxRemoveIcon: FC<IEarthBoxRemoveIconProps> = memo(props => {
  return <EarthBoxRemoveSvg {...props} />;
});
