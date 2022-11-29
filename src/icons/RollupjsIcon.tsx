import React, { FC, memo } from 'react';
import RollupjsSvg from '../svg/rollupjs.svg';

export interface IRollupjsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RollupjsIcon: FC<IRollupjsIconProps> = memo(props => {
  return <RollupjsSvg {...props} />;
});
