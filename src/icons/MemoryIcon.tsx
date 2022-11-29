import React, { FC, memo } from 'react';
import MemorySvg from '../svg/memory.svg';

export interface IMemoryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MemoryIcon: FC<IMemoryIconProps> = memo(props => {
  return <MemorySvg {...props} />;
});
