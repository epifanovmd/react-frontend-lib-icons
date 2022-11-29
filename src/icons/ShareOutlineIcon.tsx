import React, { FC, memo } from 'react';
import ShareOutlineSvg from '../svg/share-outline.svg';

export interface IShareOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShareOutlineIcon: FC<IShareOutlineIconProps> = memo(props => {
  return <ShareOutlineSvg {...props} />;
});
