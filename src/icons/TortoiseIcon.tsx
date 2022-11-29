import React, { FC, memo } from 'react';
import TortoiseSvg from '../svg/tortoise.svg';

export interface ITortoiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TortoiseIcon: FC<ITortoiseIconProps> = memo(props => {
  return <TortoiseSvg {...props} />;
});
