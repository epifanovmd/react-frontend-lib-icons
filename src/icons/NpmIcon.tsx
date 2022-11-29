import React, { FC, memo } from 'react';
import NpmSvg from '../svg/npm.svg';

export interface INpmIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NpmIcon: FC<INpmIconProps> = memo(props => {
  return <NpmSvg {...props} />;
});
