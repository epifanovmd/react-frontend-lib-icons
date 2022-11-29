import React, { FC, memo } from 'react';
import IdeogramCjkSvg from '../svg/ideogram-cjk.svg';

export interface IIdeogramCjkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IdeogramCjkIcon: FC<IIdeogramCjkIconProps> = memo(props => {
  return <IdeogramCjkSvg {...props} />;
});
