import React, { FC, memo } from 'react';
import NutSvg from '../svg/nut.svg';

export interface INutIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NutIcon: FC<INutIconProps> = memo(props => {
  return <NutSvg {...props} />;
});
