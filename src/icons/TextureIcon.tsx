import React, { FC, memo } from 'react';
import TextureSvg from '../svg/texture.svg';

export interface ITextureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextureIcon: FC<ITextureIconProps> = memo(props => {
  return <TextureSvg {...props} />;
});
