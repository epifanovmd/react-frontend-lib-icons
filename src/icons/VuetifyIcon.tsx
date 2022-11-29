import React, { FC, memo } from 'react';
import VuetifySvg from '../svg/vuetify.svg';

export interface IVuetifyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VuetifyIcon: FC<IVuetifyIconProps> = memo(props => {
  return <VuetifySvg {...props} />;
});
