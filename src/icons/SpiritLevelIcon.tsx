import React, { FC, memo } from 'react';
import SpiritLevelSvg from '../svg/spirit-level.svg';

export interface ISpiritLevelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpiritLevelIcon: FC<ISpiritLevelIconProps> = memo(props => {
  return <SpiritLevelSvg {...props} />;
});
