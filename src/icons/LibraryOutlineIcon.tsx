import React, { FC, memo } from 'react';
import LibraryOutlineSvg from '../svg/library-outline.svg';

export interface ILibraryOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LibraryOutlineIcon: FC<ILibraryOutlineIconProps> = memo(props => {
  return <LibraryOutlineSvg {...props} />;
});
