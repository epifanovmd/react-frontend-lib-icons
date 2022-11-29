import React, { FC, memo } from 'react';
import HeadLightbulbSvg from '../svg/head-lightbulb.svg';

export interface IHeadLightbulbIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadLightbulbIcon: FC<IHeadLightbulbIconProps> = memo(props => {
  return <HeadLightbulbSvg {...props} />;
});
