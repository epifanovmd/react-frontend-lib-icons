import React, { FC, memo } from 'react';
import TreeSvg from '../svg/tree.svg';

export interface ITreeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TreeIcon: FC<ITreeIconProps> = memo(props => {
  return <TreeSvg {...props} />;
});
