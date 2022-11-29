import React, { FC, memo } from 'react';
import EvPlugChademoSvg from '../svg/ev-plug-chademo.svg';

export interface IEvPlugChademoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EvPlugChademoIcon: FC<IEvPlugChademoIconProps> = memo(props => {
  return <EvPlugChademoSvg {...props} />;
});
