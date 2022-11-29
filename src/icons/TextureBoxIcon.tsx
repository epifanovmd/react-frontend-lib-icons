import React, { FC, memo } from 'react';
import TextureBoxSvg from '../svg/texture-box.svg';

export interface ITextureBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextureBoxIcon: FC<ITextureBoxIconProps> = memo(props => {
  return <TextureBoxSvg {...props} />;
});
