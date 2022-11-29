import React, { FC, memo } from 'react';
import ArtboardSvg from '../svg/artboard.svg';

export interface IArtboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArtboardIcon: FC<IArtboardIconProps> = memo(props => {
  return <ArtboardSvg {...props} />;
});
