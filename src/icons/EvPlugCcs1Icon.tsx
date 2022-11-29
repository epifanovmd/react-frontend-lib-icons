import React, { FC, memo } from 'react';
import EvPlugCcs1Svg from '../svg/ev-plug-ccs1.svg';

export interface IEvPlugCcs1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EvPlugCcs1Icon: FC<IEvPlugCcs1IconProps> = memo(props => {
  return <EvPlugCcs1Svg {...props} />;
});
