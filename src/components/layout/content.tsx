// import ManageSubscriptionButton from '../ManageSubscriptionButton';

// function Card({ children }: Props) {
//     return (
//       <div className="w-full max-w-3xl m-auto my-8 border rounded-md p border-zinc-700">
//         <div className="px-5 py-4">
//           <h3 className="mb-1 text-2xl font-medium">{title}</h3>
//           <p className="text-zinc-300">{description}</p>
//           {children}
//         </div>
//         <div className="p-4 border-t rounded-b-md border-zinc-700 bg-zinc-900 text-zinc-500">
//           {footer}
//         </div>
//       </div>
//     );
//   }


const Content = ({ children }:any) => {
   
  return (
    <aside className="dashboard-content flex flex-col items-center justify-center rounded-xl bg-[#ddd] flex-auto w-full text-center">
      {children}
    </aside>
  );
};

export default Content;