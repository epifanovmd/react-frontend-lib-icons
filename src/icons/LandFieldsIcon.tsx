import React, { FC, memo } from 'react';
import LandFieldsSvg from '../svg/land-fields.svg';

export interface ILandFieldsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LandFieldsIcon: FC<ILandFieldsIconProps> = memo(props => {
  return <LandFieldsSvg {...props} />;
});
