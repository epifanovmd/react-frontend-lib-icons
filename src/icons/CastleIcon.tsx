import React, { FC, memo } from 'react';
import CastleSvg from '../svg/castle.svg';

export interface ICastleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CastleIcon: FC<ICastleIconProps> = memo(props => {
  return <CastleSvg {...props} />;
});
