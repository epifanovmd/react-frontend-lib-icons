import React, { FC, memo } from 'react';
import ManjaroSvg from '../svg/manjaro.svg';

export interface IManjaroIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ManjaroIcon: FC<IManjaroIconProps> = memo(props => {
  return <ManjaroSvg {...props} />;
});
