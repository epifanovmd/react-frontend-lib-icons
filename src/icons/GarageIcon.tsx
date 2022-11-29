import React, { FC, memo } from 'react';
import GarageSvg from '../svg/garage.svg';

export interface IGarageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GarageIcon: FC<IGarageIconProps> = memo(props => {
  return <GarageSvg {...props} />;
});
