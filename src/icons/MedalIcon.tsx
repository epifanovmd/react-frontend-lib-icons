import React, { FC, memo } from 'react';
import MedalSvg from '../svg/medal.svg';

export interface IMedalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MedalIcon: FC<IMedalIconProps> = memo(props => {
  return <MedalSvg {...props} />;
});
