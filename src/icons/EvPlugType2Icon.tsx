import React, { FC, memo } from 'react';
import EvPlugType2Svg from '../svg/ev-plug-type2.svg';

export interface IEvPlugType2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EvPlugType2Icon: FC<IEvPlugType2IconProps> = memo(props => {
  return <EvPlugType2Svg {...props} />;
});
