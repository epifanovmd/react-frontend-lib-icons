import React, { FC, memo } from 'react';
import EvPlugType1Svg from '../svg/ev-plug-type1.svg';

export interface IEvPlugType1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EvPlugType1Icon: FC<IEvPlugType1IconProps> = memo(props => {
  return <EvPlugType1Svg {...props} />;
});
