import React, { FC, memo } from 'react';
import HeadLightbulbOutlineSvg from '../svg/head-lightbulb-outline.svg';

export interface IHeadLightbulbOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadLightbulbOutlineIcon: FC<IHeadLightbulbOutlineIconProps> = memo(props => {
  return <HeadLightbulbOutlineSvg {...props} />;
});
