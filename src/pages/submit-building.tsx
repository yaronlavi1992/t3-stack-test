import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "../utils/api";

const SubmitBuildingPage: NextPage = () => {
  const createBuildingMutation = api.buildings.submitBuildingSpecification.useMutation();

  const [energyGrade, setEnergyGrade] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  function handleSubmitBuildingSpecification(e: React.FormEvent) {
    e.preventDefault();
    createBuildingMutation.mutate({
      energyGrade,
      description
    });
    router.push('/buildings')
  }

  return (
    <>
      <Head>
        <title>Submit a Building</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Submit an Energy Grade</h1>
        <form onSubmit={handleSubmitBuildingSpecification} className='flex flex-col gap-4 items-center justify-center text-white'>
          <label htmlFor='energy-grades-select'>Energy grades</label>
          <select value={energyGrade} onChange={(e) => { setEnergyGrade(e.target.value) }} id='energy-grades-select' className="text-black" required>
            <option value={undefined} hidden></option>

            <option value="grade-a">Grade A</option>
            <option value="grade-b">Grade B</option>
            <option value="grade-c">Grade C</option>
          </select>

          <textarea required className="text-black" value={description} onChange={(e) => { setDescription(e.target.value) }} />

          <button type="submit">submit</button>
        </form>

      </main>
    </>
  );
};

export default SubmitBuildingPage;