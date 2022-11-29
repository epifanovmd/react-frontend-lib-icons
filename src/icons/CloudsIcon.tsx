import React, { FC, memo } from 'react';
import CloudsSvg from '../svg/clouds.svg';

export interface ICloudsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudsIcon: FC<ICloudsIconProps> = memo(props => {
  return <CloudsSvg {...props} />;
});
