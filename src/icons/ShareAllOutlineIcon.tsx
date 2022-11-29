import React, { FC, memo } from 'react';
import ShareAllOutlineSvg from '../svg/share-all-outline.svg';

export interface IShareAllOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShareAllOutlineIcon: FC<IShareAllOutlineIconProps> = memo(props => {
  return <ShareAllOutlineSvg {...props} />;
});
