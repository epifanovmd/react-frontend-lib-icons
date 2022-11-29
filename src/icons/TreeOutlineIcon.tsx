import React, { FC, memo } from 'react';
import TreeOutlineSvg from '../svg/tree-outline.svg';

export interface ITreeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TreeOutlineIcon: FC<ITreeOutlineIconProps> = memo(props => {
  return <TreeOutlineSvg {...props} />;
});
