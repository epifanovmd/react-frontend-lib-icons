import React, { FC, memo } from 'react';
import ChiliHotSvg from '../svg/chili-hot.svg';

export interface IChiliHotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliHotIcon: FC<IChiliHotIconProps> = memo(props => {
  return <ChiliHotSvg {...props} />;
});
