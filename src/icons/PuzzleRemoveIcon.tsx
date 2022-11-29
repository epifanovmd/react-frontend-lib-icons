import React, { FC, memo } from 'react';
import PuzzleRemoveSvg from '../svg/puzzle-remove.svg';

export interface IPuzzleRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleRemoveIcon: FC<IPuzzleRemoveIconProps> = memo(props => {
  return <PuzzleRemoveSvg {...props} />;
});
