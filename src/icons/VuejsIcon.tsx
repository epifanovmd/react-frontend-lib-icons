import React, { FC, memo } from 'react';
import VuejsSvg from '../svg/vuejs.svg';

export interface IVuejsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VuejsIcon: FC<IVuejsIconProps> = memo(props => {
  return <VuejsSvg {...props} />;
});
